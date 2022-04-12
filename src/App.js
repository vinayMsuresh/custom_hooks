import logo from './logo.svg';
import './App.css';
import CopyButton from './components/CopyButton';
import { useEffect, useState } from 'react';
import Sucess from './svg/Sucess';
import usePageBottom from './utils/usePageBottom';
import useWindowSize from './utils/useWindowSize';
import useDeviceDetect from './utils/useDeviceDetect';
function App() {
  const [text] = useState("Hi I'am Vinay");
  const bottom = usePageBottom();
  const {width, height} = useWindowSize();
  const mobile = useDeviceDetect();
  useEffect(()=>{
    console.log(mobile)
    if(bottom){
      alert('You entered last page')
    }
  },[bottom, width, height, mobile])
  return (
    <div className="App">
      <p style={{display:'inline',margin:10}}>{text}</p>
     <CopyButton code={text} />
    {!mobile && <Sucess />}<h2>
     Community guidelines exist to support the healthy and open discussion that has always been a part of our culture. They help create an environment where we can come together as a community in pursuit of our shared mission and serve our users. Working at Google comes with tremendous responsibility. Billions of people rely on us every day for high-quality, reliable information. It’s critical that we honor that trust and uphold the integrity of our products and services. The following guidelines are official policy and apply when you’re communicating in the workplace.
Here are some key things to remember as you communicate:

Be responsible. What you say and do matters. You’re responsible for your words and actions and you’ll be held accountable for them.
Be helpful. Your voice is your contribution — make it productive.
Be thoughtful. Your statements can be attributed to Google regardless of your intent, and you should be thoughtful about making statements that could cause others to make incorrect assumptions.
1. When communicating, follow the three Google Values.

Respect the user, respect the opportunity, respect each other. Our Values govern how we conduct ourselves in the pursuit of our mission. We each need to own them personally; we all need to own them collectively.

2. Do your part to keep Google a safe, productive, and inclusive environment for everyone.

While sharing information and ideas with colleagues helps build community, disrupting the workday to have a raging debate over politics or the latest news story does not. Our primary responsibility is to do the work we’ve each been hired to do, not to spend working time on debates about non-work topics.

Avoid conversations that are disruptive to the workplace or otherwise violate Google’s workplace policies. Managers are expected to address discussions that violate those rules.

3. Discussions that make other Googlers feel like they don't belong have no place here.

Don’t troll, name call, or engage in ad hominem attacks--about anyone. This includes making statements that insult, demean, or humiliate (whether individually or by reference to groups) other employees, our extended workforce, our business partners, or others (including public figures), or that violate other standards of conduct or policies against harassment and bullying.

4. You are responsible for your words and your reach.

What you say and do matters and can have lasting impact. Be respectful in your comments about (and to) your fellow Googlers.

As a Googler, your comments--wherever you make them--can have a serious impact on other Googlers, yourself and our company. We’re all free to raise concerns and respectfully question and debate the company’s activities--that’s part of our culture. Be sure to speak with good information. Don’t assume you have the full story, and take care not to make false or misleading statements about Google’s products or business that could undermine trust in our products and the work that we do.

5. Treat our data with care.

Keep in mind that our communications can be rapidly and broadly disseminated. Do not access, disclose, or disseminate Need-to-Know or Confidential information in violation of our Data Security Policy.

You are responsible for adhering to these guidelines, our Code of Conduct, and other workplace policies. If discussions or behavior don’t align with this policy, managers and discussion owners/moderators are expected to intervene. If necessary we will remove particular discussion forums, revoke commenting, viewing, or posting privileges, or take disciplinary action.

Subject to local laws and policies, Googlers and our extended workforce may communicate about pay, hours, other work terms and conditions, or about any violation of law, although they may not publicly disclose confidential information other than as provided by law.


     </h2>
     {width > 1000 && <h2>Hi I'am in big screen</h2>} 
     
    </div>
  );
}

export default App;
