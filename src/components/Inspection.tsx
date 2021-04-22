import React, { useEffect, useRef, useState } from 'react';

export const Inspection = (props: any) => {
    const input = useRef<HTMLCalciteInputElement>(null);
    const zoom = useRef<HTMLCalciteButtonElement>(null);
    const card = useRef<HTMLCalciteCardElement>(null);
    const [inspection, setInspection] = useState<__esri.Graphic>();

    const inputChanged = (e: any) => {
        props.orderChanged(props.inspection, parseInt(e.target.value));
    }
    const zoomClicked = () => {
        props.zoomToFeature(props.inspection);
    }
    useEffect(() => {
        const calciteInput = input.current;
        const calciteButton = zoom.current;

		return () => {
			calciteInput?.removeEventListener('blur', inputChanged);
            calciteButton?.removeEventListener('click', zoomClicked)

		}
    })

    useEffect(() => {
        setInspection(props.inspection);
    },[props.inspection]);

    useEffect(() => {
        if (props.hoverId >= 0) {
            card.current?.shadowRoot?.querySelector('.calcite-card-container')?.setAttribute('style', `background-color: var(--calcite-ui-${inspection?.attributes.OBJECTID === props.hoverId ? 'brand-press':'foreground-1'})`)
            if (inspection?.attributes.OBJECTID === props.hoverId) {
                const li = card.current?.closest('li');
                const ul = card.current?.closest('ul');
                if (li?.offsetTop && li.clientHeight) {
                    const scroll = li.offsetTop - li.clientHeight;
                    ul?.scrollTo({top:scroll, behavior: 'smooth'});
                }
            }
        } else {
            card.current?.shadowRoot?.querySelector('.calcite-card-container')?.setAttribute('style', `background-color: var(--calcite-ui-foreground-1'})`)
        }
    },[props.hoverId]);

    return (
        <calcite-card theme="dark" ref={card}>
            <div slot="title" className="title">
                <h3>{`${props.inspection?.attributes.Address}`}
                <calcite-button
                    ref={zoom}
                    appearance="transparent"
                    color="neutral"
                    scale="s"
                    href=""
                    icon-start="magnifyingGlassPlus"
                    dir="ltr"
                    alignment="center"
                    width="auto"
                    onClick={zoomClicked}
                    >
                    </calcite-button>
                    <br/>{`(${inspection?.attributes.count} ${inspection?.attributes.count > 1 ? 'inspections': 'inspection'})`}</h3>

                <calcite-input
                    ref={input}
                    min="1"
                    max={props.count}
                    value={inspection?.attributes.InspectionOrder}
                    step="1"
                    type="number"
                    alignment="start"
                    onBlur={inputChanged}
                ></calcite-input>
            </div>
            <span
                slot="subtitle"
                className="subtitle"
                dangerouslySetInnerHTML={{__html: props.inspection?.attributes.description}}
            ></span>
        </calcite-card>
    );
}