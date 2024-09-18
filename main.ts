 // Input elelment
 const form = document.getElementById('resume') as HTMLFormElement;
 const displayName = document.getElementById('name') as HTMLParagraphElement;
 const displayAge = document.getElementById('age') as HTMLParagraphElement;
 const displayPhone = document.getElementById('phone') as HTMLParagraphElement;
 const displayEmail = document.getElementById('email1') as HTMLParagraphElement;
 const displayExp = document.getElementById('exp') as HTMLParagraphElement;
 const displayEdu = document.getElementById('education1') as HTMLParagraphElement;
 const displaySkills = document.getElementById('skill1') as HTMLParagraphElement;
 const displayHomeadress = document.getElementById('home') as HTMLParagraphElement;
 const displayaddress = document.getElementById('address') as HTMLParagraphElement;
 const resumeJane = document.getElementById("main")!

 
 
 if (form) {
   form.addEventListener('submit', (event: Event) => {
     event.preventDefault();
    
    
     const name = (document.getElementById('text') as HTMLInputElement).value;
     const age1 = (document.getElementById('age1') as HTMLInputElement).value;
     const phone = (document.getElementById('phone1') as HTMLInputElement).value;
     const email = (document.getElementById('email') as HTMLInputElement).value; 
     const education = (document.getElementById('education') as HTMLTextAreaElement).value; 
     const exp = (document.getElementById('exper') as HTMLTextAreaElement).value; 
     const skill = (document.getElementById('skill') as HTMLTextAreaElement).value; 
     const address = (document.getElementById('address1') as HTMLInputElement).value; 
     const Home1 = (document.getElementById('Home1') as HTMLInputElement).value; 
 
     // Insert values
     let outPutarr = [
     displayName.innerHTML = `Name: ${name}`,
     displayAge.innerHTML = `Age: ${age1}`,
     displayPhone.innerHTML =`Phone: ${phone}`,
     displayEmail.innerHTML = `Email:${email}`,
     displayEdu.innerHTML = `Education:${education}`,
     displayExp.innerHTML = `Exp:${exp}`,
     displaySkills.innerHTML = `${skill}`,
     displayaddress.innerHTML = `${address} `,
     displayHomeadress.innerHTML = `${Home1} `
     
     ]

     const link = document.getElementById("link")
     let userName = (document.getElementById("username") as HTMLInputElement).value;
   const uniqUrl = `resume/${userName.replace(/\s+/g,' ')}cv.html`
   let anchorTag = document.createElement("a");

   anchorTag.href = `data:text/html;charset=utf-8,` + encodeURIComponent(`${displayName}${displayAge}${displayPhone}${displayEmail}
    ${displayEdu}${displayExp}${displaySkills}${displayaddress}${displayHomeadress}`)

   anchorTag.download = uniqUrl
   anchorTag.textContent = "Download"
   link?.appendChild(anchorTag)



   // for download funtionailty
   const btn = document.getElementById("download")

   btn?.addEventListener('click',function(){
    window.print()
   })

  // sherable link
    const sharableBtn = document.getElementById("sherable-link")
    sharableBtn?.addEventListener('click',async() => {
    try{
      const sharableLink = `http://yourdomain.com/resume/${name.replace(/\s+/g, " ")}-cv.html`;

     await navigator.clipboard.writeText(sharableLink)

    }catch(err){
     console.error("faild copy link" + err)
    }
    })



   });
  }
