// OGAME DATABASE - Solo Costi e Formule
// I nomi sono gestiti dai file di lingua (locales/it.json, etc) usando le chiavi qui sotto.

const OGAME_DB = {
    resources: {
        label: "cat_resources",
        items: {
            metal_mine: { b: [60,15,0], f: 1.5 },
            crystal_mine: { b: [48,24,0], f: 1.6 },
            deuterium_synthesizer: { b: [225,75,0], f: 1.5 },
            solar_plant: { b: [75,30,0], f: 1.5 },
            fusion_reactor: { b: [900,360,180], f: 1.8 },
            metal_storage: { b: [1000,0,0], f: 2.0 },
            crystal_storage: { b: [1000,500,0], f: 2.0 },
            deuterium_tank: { b: [1000,1000,0], f: 2.0 }
        }
    },
    facilities: {
        label: "cat_facilities",
        items: {
            robotics_factory: { b: [400,120,200], f: 2.0 },
            shipyard: { b: [400,200,100], f: 2.0 },
            research_lab: { b: [200,400,200], f: 2.0 },
            alliance_depot: { b: [20000,40000,0], f: 2.0 },
            missile_silo: { b: [20000,20000,1000], f: 2.0 },
            nanite_factory: { b: [1000000,500000,100000], f: 2.0 },
            terraformer: { b: [0,50000,100000,1000], f: 2.0 },
            space_dock: { b: [200,0,50,50], f: 5.0 }
        }
    },
    research: {
        label: "cat_research",
        items: {
            energy_technology: { b: [0,800,400], f: 2.0 },
            laser_technology: { b: [200,100,0], f: 2.0 },
            ion_technology: { b: [1000,300,100], f: 2.0 },
            hyperspace_technology: { b: [0,4000,2000], f: 2.0 },
            plasma_technology: { b: [2000,4000,1000], f: 2.0 },
            combustion_drive: { b: [400,0,600], f: 2.0 },
            impulse_drive: { b: [2000,4000,600], f: 2.0 },
            hyperspace_drive: { b: [10000,20000,6000], f: 2.0 },
            espionage_technology: { b: [200,1000,200], f: 2.0 },
            computer_technology: { b: [0,400,600], f: 2.0 },
            astrophysics: { b: [4000,8000,4000], f: 1.75 },
            intergalactic_research_network: { b: [240000,400000,160000], f: 2.0 },
            graviton_technology: { b: [0,0,0,300000], f: 3.0 }, // Energy only (special handling needed usually, but kept for structure)
            weapons_technology: { b: [800,200,0], f: 2.0 },
            shielding_technology: { b: [200,600,0], f: 2.0 },
            armour_technology: { b: [1000,0,0], f: 2.0 }
        }
    },
    fleet: {
        label: "cat_fleet",
        items: {
            light_fighter: { b: [3000,1000,0], type: 'unit' },
            heavy_fighter: { b: [6000,4000,0], type: 'unit' },
            cruiser: { b: [20000,7000,2000], type: 'unit' },
            battleship: { b: [45000,15000,0], type: 'unit' },
            battlecruiser: { b: [30000,40000,15000], type: 'unit' },
            bomber: { b: [50000,25000,15000], type: 'unit' },
            destroyer: { b: [60000,50000,15000], type: 'unit' },
            deathstar: { b: [5000000,4000000,1000000], type: 'unit' },
            reaper: { b: [85000,55000,20000], type: 'unit' },
            pathfinder: { b: [8000,15000,8000], type: 'unit' },
            small_cargo: { b: [2000,2000,0], type: 'unit' },
            large_cargo: { b: [6000,6000,0], type: 'unit' },
            colony_ship: { b: [10000,20000,10000], type: 'unit' },
            recycler: { b: [10000,6000,2000], type: 'unit' },
            espionage_probe: { b: [0,1000,0], type: 'unit' },
            solar_satellite: { b: [0,2000,500], type: 'unit' },
            crawler: { b: [2000,2000,1000], type: 'unit' },
            rocket_launcher: { b: [2000,0,0], type: 'unit' },
            light_laser: { b: [1500,500,0], type: 'unit' },
            heavy_laser: { b: [6000,2000,0], type: 'unit' },
            gauss_cannon: { b: [20000,15000,2000], type: 'unit' },
            ion_cannon: { b: [2000,6000,0], type: 'unit' },
            plasma_turret: { b: [50000,50000,30000], type: 'unit' }
        }
    }
};
