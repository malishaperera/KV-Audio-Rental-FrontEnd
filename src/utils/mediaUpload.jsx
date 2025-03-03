import { createClient } from "@supabase/supabase-js"


const anon_key ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdibXlteGRlZm93cGtzcmt3YXp5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk4ODk3ODksImV4cCI6MjA1NTQ2NTc4OX0.84bE1LsJRrd5o-LNbfPtgjokrNo-38gGXgB8qf9L2Ds"
// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdibXlteGRlZm93cGtzcmt3YXp5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk4ODk3ODksImV4cCI6MjA1NTQ2NTc4OX0.84bE1LsJRrd5o-LNbfPtgjokrNo-38gGXgB8qf9L2Ds"
const supabase_url = "https://gbmymxdefowpksrkwazy.supabase.co"

//code and supabase connection link
const supabase = createClient(supabase_url, anon_key)


export default function mediaUpload(file) {
	return new Promise((resolve, reject) => {
        if(file == null){
            reject("No file selected")
        }

		const timestamp = new Date().getTime();
		const fileName = timestamp + file.name;

		supabase.storage
			.from("images")
			.upload(fileName, file, {
				cacheControl: "3600",
				upsert: false,
			})
			.then(() => {
				const publicUrl = supabase.storage.from("images").getPublicUrl(fileName)
					.data.publicUrl;
				resolve(publicUrl);
			}).catch(()=>{
                reject("Error uploading file")
            })
	});
}