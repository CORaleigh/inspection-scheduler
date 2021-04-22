import * as promiseUtils from '@arcgis/core/core/promiseUtils';

const getRelatedInspections = (featureLayer: __esri.FeatureLayer, featureSet: __esri.FeatureSet, oids:number[]): Promise<__esri.Graphic[]> => {
    return promiseUtils.create((resolve) => {featureLayer.queryRelatedFeatures({
        relationshipId: 0,
        objectIds: oids,
        outFields: ['*'],
        where: `IsCompleted = 'False'`,
    })
    .then((result) => {
        oids.forEach((oid) => {
            let description = '';
            let completed = 'True';
            result[oid]?.features.forEach((relatedFeature: __esri.Graphic) => {
                description += `<a href="https://raleighnc-energov.tylerhost.net/apps/manageinspection/#/inspection/${relatedFeature.getAttribute(
                    'IMInspectionID',
                )}" target="_blank">${relatedFeature.getAttribute(
                    'LinkNumber',
                )}</a> - ${relatedFeature.getAttribute(
                    'InspectionType',
                )} - ${relatedFeature.getAttribute('InspectionStatus')}\n`;
                if (relatedFeature.getAttribute('IsCompleted') === 'False') {
                    completed = 'False';
                }
            });
            const locationFeature = featureSet.features.find((feature) => {
                return feature.getAttribute('OBJECTID') === oid;
            });
            locationFeature?.setAttribute('count', result[oid]?.features.length);
            locationFeature?.setAttribute('description', description);
            locationFeature?.setAttribute('IsCompleted', completed);
        });

        resolve([
            ...featureSet.features.sort((a, b) => {
                return a.getAttribute('InspectionOrder') - b.getAttribute('InspectionOrder');
            }),
        ]);
        //features = JSON.parse(JSON.stringify(inspections));
        //createLabelLayer();
    });});
}

export const getInspections = (featureLayer: __esri.FeatureLayer, inspector: string): Promise<__esri.Graphic[]> => {
    return promiseUtils.create((resolve) => {
        featureLayer.definitionExpression = `PrimaryInspector = '${inspector}' and IsCompleted = 'False'`;
        featureLayer
        .queryFeatures({
            outFields: ['*'],
            returnGeometry: true,
            where: `PrimaryInspector = '${inspector}' and IsCompleted = 'False'`
        })
        .then((featureSet) => {
            const oids = featureSet.features.map((feature) => {
                return feature.getAttribute('OBJECTID');
            });
            featureSet.features.forEach((feature, i) => {
                const order = feature?.getAttribute('InspectionOrder');
                console.log(feature.attributes);
                if (order === 0 || !order) {
                    feature?.setAttribute('InspectionOrder', i + 1);
                }
            });
            getRelatedInspections(featureLayer, featureSet, oids).then(features => {
                resolve(features);
            });
        });
    });
}