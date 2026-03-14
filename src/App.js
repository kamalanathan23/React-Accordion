import Accordion from "./Components/Accordion";

function App() {

  const data = [
    { 
      title: 'How To Cancel Chase Card?', 
      content: 'Lorem ipsum dolor sit amet consectetur. Ut parturient at volutpat dolor nunc cursus at rhoncus. Quis sit id tempus aliquam. Mauris felis purus morbi facilisis. Ullamcorper id consectetur ultricies nunc nunc enim accumsan porttitor.' 
    },
    { 
      title: 'What is Global Web Pay Alternative?', 
      content: 'Lorem ipsum dolor sit amet consectetur. Ut parturient at volutpat dolor nunc cursus at rhoncus. Quis sit id tempus aliquam. Mauris felis purus morbi facilisis. Ullamcorper id consectetur ultricies nunc nunc enim accumsan porttitor.' 
    },
    { 
      title: 'What are BIC and SWIFT codes?', 
      content: 'Lorem ipsum dolor sit amet consectetur. Ut parturient at volutpat dolor nunc cursus at rhoncus. Quis sit id tempus aliquam. Mauris felis purus morbi facilisis. Ullamcorper id consectetur ultricies nunc nunc enim accumsan porttitor.' 
    },
    { 
      title: 'Explaining what Britains exit from the EU means?', 
      content: 'Lorem ipsum dolor sit amet consectetur. Ut parturient at volutpat dolor nunc cursus at rhoncus. Quis sit id tempus aliquam. Mauris felis purus morbi facilisis. Ullamcorper id consectetur ultricies nunc nunc enim accumsan porttitor.' 
    },
  ];

  return (
    <>
      <Accordion data={data} />
    </>
  );
}


// live dependecy: font-family, 100vh, jerk animation
export default App;
