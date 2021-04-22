import React, { useEffect, useRef, useState } from 'react';
import { InspectorsList } from './InspectorsList';
import { MapView } from './MapView';
import { InspectionList } from './InspectionList';
import { getInspections } from './inspections';
import  Graphic from '@arcgis/core/Graphic';
export const Shell = (props: any) => {
    const [inspectors, setInspectors] = useState<string[]>([]);
    const [inspector, setInspector] = useState<string>();
    const [inspections, setInspections] = useState<__esri.Graphic[]>([]);

    const [layer, setLayer] = useState<__esri.FeatureLayer>();
    const [table, setTable] = useState<__esri.FeatureLayer>();
    const [hoverId, setHoverId] = useState<number>();
    const [collapsed, setCollapsed] = useState(false);
    const viewRef = useRef<__esri.MapView>();
    const layerViewRef = useRef<__esri.FeatureLayerView>();
    const highlight = useRef<any>();
    const zoomToInspections = (features: __esri.Graphic[]) => {
        debugger
        if (features.length > 1 || features.length === 0) {
            (layer as __esri.FeatureLayer).queryExtent({ where: features.length === 0 ? '1=1' : layer?.definitionExpression }).then((result) => {
                if (result.extent) {
                    viewRef.current?.goTo({target: result.extent.expand(1.5)}, {duration: 1000, easing: 'ease'});
                }
            });
        } else {
            viewRef.current?.goTo({target: features, zoom: 15}, {duration: 1000, easing: 'ease'});
        }
    }
    const inspectorSelected = (inspector: string) => {
        setInspector(inspector);
        getInspections(layer as __esri.FeatureLayer, inspector).then((features: __esri.Graphic[]) => {
            setInspections(features);
            updateInspections(layer as __esri.FeatureLayer, inspections);
            zoomToInspections(features);
        });
    }

    const updateInspections = (layer: __esri.FeatureLayer, inspections: __esri.Graphic[]) => {
        const updates: __esri.Graphic[] = [];
        inspections.forEach(update => {
            updates.push(new Graphic({ attributes: update.attributes}));
        })
        
        layer?.applyEdits({updateFeatures: updates}).then(() => {
            layer.refresh();
			const oids = updates.map((feature) => {
				return feature.attributes.OBJECTID;
			});
			layer
				.queryRelatedFeatures({
					relationshipId: 0,
					objectIds: oids,
					outFields: ['OBJECTID', 'InspectionOrder'],
					returnGeometry: false,
				})
				.then((result) => {
					const records: Graphic[] = [];
					updates.forEach((update) => {
						result[update.attributes.OBJECTID]?.features.forEach((record: Graphic) => {
							record.attributes.InspectionOrder = update.attributes.InspectionOrder;
							records.push(record);
						});
					});
					table?.applyEdits({ updateFeatures: records }).then((result: any) => {
						console.log(result);
					});
				});            
        });
    }

    const inspectionsChanged = (inspections: __esri.Graphic[]) => {
        setInspections(inspections);
        updateInspections(layer as __esri.FeatureLayer, inspections);
    }

    const mouseOverPoint = (oid: number) => {
        setHoverId(oid);
    }

    const listMouseEnter = (e: any) =>  {
        highlight.current?.remove();
        const value = e.target.closest('li')?.value;
        const inspection = inspections.find(inspection => {return inspection.attributes.OBJECTID === value});
        if (inspection) {
            highlight.current = layerViewRef.current?.highlight(inspection);
        }
    }

    const listMouseLeave = (e: any) =>  {
        highlight.current?.remove();
    }


    const mapLoaded = (data: any) => {
        const view: __esri.MapView = data.view;
        const featureLayer: __esri.FeatureLayer = data.layer;
        setTable(data.table);
        viewRef.current = view;
        setLayer(featureLayer);
        view.whenLayerView(featureLayer).then(layerView => {
            layerViewRef.current = layerView;
        })
        featureLayer.definitionExpression = `PrimaryInspector = '${props.inspector}' and IsCompleted = 'False'`;
        featureLayer.queryExtent({where: featureLayer.definitionExpression}).then(extent => {
            view.goTo(extent);
        });
        setInspector(props.inspector);
        getInspections(featureLayer, props.inspector).then((features: __esri.Graphic[]) => {
            setInspections(features);
            zoomToInspections(features);

        });
		featureLayer
			.queryFeatures({
				returnDistinctValues: true,
				outFields: ['PrimaryInspector'],
				returnGeometry: false,
				orderByFields: ['PrimaryInspector'],
				where: `PrimaryInspector is not null`,
			})
			.then((featureSet) => {
				setInspectors(
					featureSet.features.map((feature) => {
						return feature.getAttribute('PrimaryInspector');
					}),
				);
			});        
    }

    useEffect(() => {
        const interval = setInterval(() => {
            if (inspector) {
                
                getInspections(layer as __esri.FeatureLayer, inspector).then((features: __esri.Graphic[]) => {
                    setInspections(features);
                    zoomToInspections(features);

                });
            }
        }, 60000);
        return () => {
            clearInterval(interval);
        }
    })


 
    return (
        <calcite-shell theme="dark">
            <calcite-shell-panel slot="primary-panel"  collapsed={collapsed} position="start" width-scale="l" detached-height-scale="l">
            { layer && <InspectorsList inspectors={inspectors} inspectorSelected={inspectorSelected} inspector={inspector} />}
            {inspector && inspections.length === 0 &&
            <div className="message">
                    <calcite-icon icon="checkCircleF" class="completed-icon"></calcite-icon>{' '}
                    <div className="inner">All inspections have been completed</div>
                </div>}
            { inspector && inspections.length > 0 &&  <InspectionList inspections={inspections} layer={layer} inspectionsChanged={inspectionsChanged} hoverId={hoverId} listMouseEnter={listMouseEnter} listMouseLeave={listMouseLeave}  zoomToFeature={(feature: __esri.Graphic) => {
                viewRef.current?.goTo({target: feature, zoom: 17}, {duration: 1000, easing: 'ease'});
            }}/>}
                   
            </calcite-shell-panel>

            <div slot="shell-header">
                <header>
                    <calcite-button alignment="start" color="neutral" appearance="transparent" onClick={() => {
                        debugger
                        setCollapsed(!collapsed);
                    }}><calcite-icon icon="hamburger" scale="l"></calcite-icon></calcite-button>

                    <h2>Inspection Scheduler</h2>
                </header>
            </div>
            {props.inspector && <MapView basemap="b69e76a446ac479998ff31de839ba323" layer="fb4ba67c7aa24553830eea072bced580" mapLoaded={mapLoaded} mouseOverPoint={mouseOverPoint} ></MapView>}

        </calcite-shell>);
    
}