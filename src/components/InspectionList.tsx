import React, {useEffect, useRef, useState} from 'react';
import Sortable from 'sortablejs';
import { Inspection } from './Inspection';

export const InspectionList = (props: any) => {
    const draggable = useRef<HTMLUListElement>(null);
    const [hoverId, setHoverId] = useState<number>();

    const zoomToFeature = (feature: __esri.Graphic) => {
        props.zoomToFeature(feature);
    }
    const updateOrder = (
		newOrder: number,
		oldOrder: number,
		objectId: number,
		inspection: __esri.Graphic,
	): number | undefined => {
		console.log(inspection.attributes.InspectionOrder, newOrder, oldOrder, inspection.attributes.Address);

		if (inspection.attributes.OBJECTID === objectId) {
			return newOrder;
		} else if (newOrder > oldOrder) {
			if (inspection.attributes.InspectionOrder <= newOrder && inspection.attributes.InspectionOrder > oldOrder) {
				return inspection.attributes.InspectionOrder - 1;
			} else {
				return inspection.attributes.InspectionOrder;
			}
		} else if (newOrder < oldOrder) {
			if (inspection.attributes.InspectionOrder >= newOrder && inspection.attributes.InspectionOrder < oldOrder) {
				console.log(inspection.attributes.Address);
				return inspection.attributes.InspectionOrder + 1;
			} else {
			}
		} else {
			return inspection.attributes.InspectionOrder;
		}
	};

    const orderChanged = (inspection: __esri.Graphic, order: number) => {
		const oldOrder = inspection?.attributes.InspectionOrder;
        const oid = inspection?.attributes.OBJECTID;
        const inspections = [...props.inspections];
		inspections.forEach((inspection) => {
			const newValue = updateOrder(order, oldOrder, oid, inspection);
			if (newValue) {
				inspection.attributes.InspectionOrder = newValue;
				console.log(inspection.attributes.InspectionOrder);
			}
		});

		props.inspectionsChanged([
			...inspections.sort((a, b) => {
				return a.attributes.InspectionOrder - b.attributes.InspectionOrder;
			}),
		]);
    }
    useEffect(() => {
		Sortable.create(draggable.current as HTMLUListElement, {
			onEnd: (event: any) => {
                const inspections = [...props.inspections];
                event.from.childNodes.forEach((node: any, i: number) => {
					const inspection: __esri.Graphic = props.inspections?.find((inspection: __esri.Graphic) => {
						return inspection.attributes.OBJECTID === parseInt(node.value);
					}) as __esri.Graphic;
					inspection.attributes.InspectionOrder = i + 1;
                });
                props.inspectionsChanged([...inspections])
			},
		});
    }, []);

    useEffect(() => {
        setHoverId(props.hoverId);
    });


    return (
        <ul className="draggable" ref={draggable} >
            {props.inspections?.map((inspection: __esri.Graphic) => {
                return <li key={inspection.attributes.OBJECTID} value={inspection.attributes.OBJECTID} onMouseEnter={props.listMouseEnter}  onMouseLeave={props.listMouseLeave}><Inspection inspection={inspection} orderChanged={orderChanged} zoomToFeature={zoomToFeature} hoverId={hoverId} count={props.inspections.length}/></li>
            })}
        </ul>     
    );
}