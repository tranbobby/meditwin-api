// Fonction qui retourne une Promise qui se résout après un délai
// getPatient(id) → après 500ms, retourne { id: id, nom: 'Dupont' }
// getExamens(patientId) → après 300ms, retourne [{ type: 'IRM' }, { type: 'Scanner' }]
// getTraitements(patientId) → après 200ms, retourne [{ medicament: 'Doliprane' }]

function getPatient(id){
	return new Promise((resolve)=>{
		setTimeout(()=>{
			resolve({id : id, nom:'Dupont'})},500)
			});
}

function getExamens(id){
	return new Promise((resolve)=>{
		setTimeout(()=>{
			resolve([{ type: 'IRM' }, { type: 'Scanner' }])},300)
			});
}

function getTraitements(id){
	return new Promise((resolve)=>{
		setTimeout(()=>{
			resolve([{ medicament: 'Doliprane' }])},200)
			});
}

function joke(){
	return new Promise((resolve)=>{
		setTimeout(()=>{
			resolve ({Nom :'Bobby', match : 10000})
		},100)
	});
}

async function dossierComplet(){
	const patient = await getPatient(42);
	console.log('patient name and id : '+patient.nom + patient.id);
	const examen = await getExamens(42);
	console.log('exam :',examen[0]);
	const traitement = await getTraitements(42);
	console.log('traitement',traitement.length);
}


dossierComplet();