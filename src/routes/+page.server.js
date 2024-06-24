import { supabase } from "$lib/supabase";

export const load = async () => {
	const { data: EnergyDatabase, error } = await supabase
    .from('EnergyDatabase')
    .select('*');
	if (!EnergyDatabase) throw error;
		
  console.log("Ran layout load");
  return {
    data: await EnergyDatabase,
    EnergyDatabase: EnergyDatabase ?? [], 
};

};
