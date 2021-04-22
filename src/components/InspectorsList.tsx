import React, { useEffect, useRef } from 'react';

export const InspectorsList = (props: any) => {
    const combobox = useRef<HTMLCalciteComboboxElement>(null);
	const comboboxItemChanged =  (e: any) => {
		props.inspectorSelected(e.detail.getAttribute('value'));
	};
    useEffect(() => {
		const calciteCombobox =  combobox.current;
		calciteCombobox?.addEventListener('calciteComboboxItemChange', comboboxItemChanged);
		return () => {
			calciteCombobox?.removeEventListener('calciteComboboxItemChange', comboboxItemChanged)
		}
    });
	return (
		<calcite-combobox
			label="demo combobox"
			placeholder="placeholder"
			selection-mode="single"
			sel
			scale="m"
			max-items="0"
			dir="ltr"
			calcite-hydrated=""
			theme="dark"
			ref={combobox}
		>
			{props.inspectors.map((inspector: string) => {
				return (
					<calcite-combobox-item
						value={inspector}
						text-label={inspector}
						key={inspector}
						placeholder="Select inspector"
						selected={props.inspector === inspector}
						icon="user"
					></calcite-combobox-item>
				);
			})}
		</calcite-combobox>
	);
}