"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Input elelment
const form = document.getElementById('resume');
const displayName = document.getElementById('name');
const displayAge = document.getElementById('age');
const displayPhone = document.getElementById('phone');
const displayEmail = document.getElementById('email1');
const displayExp = document.getElementById('exp');
const displayEdu = document.getElementById('education1');
const displaySkills = document.getElementById('skill1');
const displayHomeadress = document.getElementById('home');
const displayaddress = document.getElementById('address');
const resumeJane = document.getElementById("main");
if (form) {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = document.getElementById('text').value;
        const age1 = document.getElementById('age1').value;
        const phone = document.getElementById('phone1').value;
        const email = document.getElementById('email').value;
        const education = document.getElementById('education').value;
        const exp = document.getElementById('exper').value;
        const skill = document.getElementById('skill').value;
        const address = document.getElementById('address1').value;
        const Home1 = document.getElementById('Home1').value;
        // Insert values
        let outPutarr = [
            displayName.innerHTML = `Name: ${name}`,
            displayAge.innerHTML = `Age: ${age1}`,
            displayPhone.innerHTML = `Phone: ${phone}`,
            displayEmail.innerHTML = `Email:${email}`,
            displayEdu.innerHTML = `Education:${education}`,
            displayExp.innerHTML = `Exp:${exp}`,
            displaySkills.innerHTML = `${skill}`,
            displayaddress.innerHTML = `${address} `,
            displayHomeadress.innerHTML = `${Home1} `
        ];
        const link = document.getElementById("link");
        let userName = document.getElementById("username").value;
        const uniqUrl = `resume/${userName.replace(/\s+/g, ' ')}cv.html`;
        let anchorTag = document.createElement("a");
        anchorTag.href = `data:text/html;charset=utf-8,` + encodeURIComponent(`${displayName}${displayAge}${displayPhone}${displayEmail}
    ${displayEdu}${displayExp}${displaySkills}${displayaddress}${displayHomeadress}`);
        anchorTag.download = uniqUrl;
        anchorTag.textContent = "Download";
        link === null || link === void 0 ? void 0 : link.appendChild(anchorTag);
        // for download funtionailty
        const btn = document.getElementById("download");
        btn === null || btn === void 0 ? void 0 : btn.addEventListener('click', function () {
            window.print();
        });
        // sherable link
        const sharableBtn = document.getElementById("sherable-link");
        sharableBtn === null || sharableBtn === void 0 ? void 0 : sharableBtn.addEventListener('click', () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const sharableLink = `http://yourdomain.com/resume/${name.replace(/\s+/g, " ")}-cv.html`;
                yield navigator.clipboard.writeText(sharableLink);
            }
            catch (err) {
                console.error("faild copy link" + err);
            }
        }));
    });
}
