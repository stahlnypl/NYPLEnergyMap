export async function loadTractData() {
    try {
        const response = await fetch('https://raw.githubusercontent.com/stahlnypl/NYPLEnergyMap/main/static/Data/images/NYCCensusTractData.geojson');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error loading Tract Data:', error);
        return null;
    }
};

export async function loadNTAData() {
    try {
        const response = await fetch('https://raw.githubusercontent.com/stahlnypl/NYPLEnergyMap/main/static/Data/images/2020_NTAs.geojson');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error loading NTA Data', error);
        return null;
    }
};
