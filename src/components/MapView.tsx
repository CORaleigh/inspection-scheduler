import React, {useEffect, useRef} from 'react';
import ArcGISMap from '@arcgis/core/Map';
import ArcGISMapView from '@arcgis/core/views/MapView';
import Locate from '@arcgis/core/widgets/Locate';
import Search from '@arcgis/core/widgets/Search';

import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import VectorTileLayer from '@arcgis/core/layers/VectorTileLayer';
import PopupTemplate from '@arcgis/core/PopupTemplate';

export const MapView = (props: any) => {
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        debugger
        const featureLayer = new FeatureLayer({
            portalItem: {
                id: 'fb4ba67c7aa24553830eea072bced580',
            },
            layerId: 0,
        
            popupTemplate: new PopupTemplate({
                title: '#{InspectionOrder} {address}',
                expressionInfos: [
                    {
                        name: 'inspections',
                        title: 'inspections',
                        expression: `var inspection = '';
                    for (var i in FeatureSetByRelationshipName($feature, 'Inspections', ['*'], false)) {
                        if (i.InspectionStatus != 'Canceled') {
                               inspection += Concatenate(i.LinkNumber,' - ',i.InspectionType,' - ', i.InspectionStatus,TextFormatting.NewLine,TextFormatting.NewLine) 
                    
                        }
                    }
                    return inspection`,
                    },
                ],
                content: [
                    // new CustomContent({
                    // 	outFields: ['*'],
                    // 	creator: (e: any) => {
                    // 		const inspection = e.graphic;
                    // 		const input = document.createElement('calcite-input');
                    // 		input.setAttribute('label', inspection.attributes.Address);
                    // 		input.setAttribute('min', '1');
                    // 		//input.setAttribute('max', (inspections.length + 1).toString());
                    // 		input.setAttribute('value', inspection.getAttribute('InspectionOrder'));
                    // 		input.setAttribute('step', '1');
                    // 		input.setAttribute('type', 'number');
                    // 		input.setAttribute('number-button-type', 'horizontal');
        
                    // 		input.setAttribute('slot', 'actions-end');
                    // 		input.setAttribute('alignment', 'start');
                    // 		return input;
                    // 	},
                    // }),
        
                    { type: 'text', text: '{expression/inspections}' },
                ],
            }),
        });
        
        const featureTable = new FeatureLayer({
            portalItem: {
                id: 'fb4ba67c7aa24553830eea072bced580',
            },
            layerId: 1,
            refreshInterval: 0.1,
        });

        const mapPointerMoved = (event: any) => {
			view.hitTest(event).then((response) => {
				const graphic = response.results.filter((result) => {
					return result.graphic.layer === featureLayer;
				})[0]?.graphic as __esri.Graphic;
				if (graphic) {
					const oid = graphic?.attributes.OBJECTID;
					props.mouseOverPoint(oid);
				} else {
                    props.mouseOverPoint(-999);
                }
			});
		};
        
       const map = new ArcGISMap({
            basemap: {
                baseLayers: [
                    new VectorTileLayer({
                        portalItem: {
                            // topographic
                            id: 'b69e76a446ac479998ff31de839ba323',
                        },
                    }),
                ],
            },
            layers: [featureLayer],
            tables: [featureTable],
        });
    
        const view = new ArcGISMapView({map: map, container: ref.current as HTMLDivElement, extent: {
            xmin: -78.931072,
            ymin: 35.626683,
            xmax: -78.471384,
            ymax: 35.954717,
            spatialReference: {
                wkid: 4326,
            }},
            constraints: {
                minZoom: 9,
                geometry:{
                    type: 'extent',
                    xmin: -78.931072,
                    ymin: 35.626683,
                    xmax: -78.471384,
                    ymax: 35.954717,
                } as any
            }
        })
        view.ui.add(new Locate({view: view}), 'top-left');
        const search = new Search({view: view, includeDefaultSources: false, sources:[{
            locator: {
               url: 'https://maps.raleighnc.gov/arcgis/rest/services/Locators/Locator/GeocodeServer'
            },
            placeholder: 'Search by address',
    
          } as any]});
        view.ui.add(search, 'top-right');


    
        view.when(() => {
            props.mapLoaded({view: view, layer: featureLayer, table: featureTable})
            view.on('pointer-move', mapPointerMoved);
        });
    }, []);


    return (
        <div ref={ref}></div>
    );
}