import { useState, useEffect } from "react";

export default function FAQs() {

  const FAQs = [
    {
      question: 'What is Pay4me App?',
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis atque nihil itaque cumque nam, reiciendis, deleniti doloremque corporis et, soluta nesciunt? Culpa tempora itaque reiciendis accusamus, nisi aut aliquam impedit?",
    },
    {
      question: 'How can Pay4me app help me receive transactions from my family?',
      answer: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere recusandae ipsam possimus dolorem, voluptas cupiditate aspernatur earum repellendus enim veritatis nesciunt libero eligendi voluptate non, magni adipisci iure quos mollitia?'
    },
    {
      question: 'How long does it take to receive payments from Pay4me?',
      answer: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis similique possimus delectus itaque enim asperiores inventore voluptatibus? Ullam odit recusandae, temporibus minus, sequi blanditiis ut eos perspiciatis suscipit laudantium optio.'
    },
    {
      question: 'How can I convert my local currency to another currency?',
      answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe culpa a amet voluptate, laboriosam corrupti sapiente minima quia ut dignissimos atque ea fuga delectus sint obcaecati odio temporibus! Rerum, quam?'
    }
  ]

  const [hiddenItem, setHiddenItem] = useState<{ [key: number]: boolean}>({})

  useEffect(() =>{
    const initialHidden: {[key: number] : boolean} = {};
    FAQs.forEach((_, index) => {
      initialHidden[index] = true
    });
    setHiddenItem(initialHidden)
  }, [])

  const toggleHidden = (index: number) => {
    setHiddenItem((prev)=> ({
      ...prev,
      [index]: !prev[index]
    }));
  };


  return (
    <section className="flex gap-16 px-32 py-16" id="faqs">
      <div className="flex flex-1 flex-col gap-8">
        <p className="font-semibold text-5xl">Pay4me FAQs</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quia
          ad impedit dolores, sed atque provident, nisi officia perferendis eum,
          quaerat cupiditate quas magni similique id molestias! Corporis,
          excepturi nesciunt.
        </p>
        <div className="flex gap-8 items-center font-bold">
          <div className="border-2 rounded-full px-4 py-2">
            <p>More Questions</p>
          </div>
          <div>
            <p className="underline">Contact Us</p>
          </div>
        </div>
      </div>
      <div className="flex-1/5 border-b-2">
        {FAQs.map((item, index) => (
          <div key={index} className='border-t-2 px-4 py-2 cursor-pointer h-fit' onClick={() => toggleHidden(index)}>
            <div className="flex justify-between font-semibold text-xl">
              <p className="w-[70%]">{item.question}</p>
              <p>{hiddenItem[index] ? '+' : '-'}</p>
            </div>
            <p className={`${hiddenItem[index] ? 'hidden' : 'visible mt-4'}`}>{item.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
