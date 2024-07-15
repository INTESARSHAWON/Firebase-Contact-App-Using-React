import Navbar from "./components/Navbar";
import { FiSearch } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai";
import { useEffect, useState } from "react";
import { collection, getDocs} from "firebase/firestore";
import { db } from "./config/firebase";
import ContactCard from "./components/ContactCard";
import Modal from "./components/Modal";
import AddAndUpdateContact from "./components/AddAndUpdateContact";

const App = () => {
  const [contacts, setContacts] = useState([]);

  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () =>{
    setIsOpen(true);
  }

  const onClose = () => {
    setIsOpen(false);
  }

  useEffect(()=>{ 
    const getContacts = async () => {
      try {
        const contactsRef = collection (db,"contacts");
        const contactsSnapshot = await getDocs(contactsRef);
        const contactLists = contactsSnapshot.docs.map((doc)=>{
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setContacts(contactLists);
      } catch (error) {
        console.log(error);
      }
    }
    getContacts();

  }, []);

  return (
    <>
      <div className="mx-auto max-w-[370px] px-4">
        <Navbar/>
      
        <div className="flex gap-2">
          <div className="relative flex items-center flex-grow">
            <FiSearch className="ml-1 text-3xl text-white absolute"/>
            <input 
            type="text" 
            className="h-10 flex-grow border bg-transparent border-white rounded-md text-white pl-9"/>
          </div>
            <AiFillPlusCircle className="text-5xl text-white cursor-pointer" onClick={onOpen}/>
        
        </div>
      
        <div className="mt-4 gap-3 flex flex-col">
          {
            contacts.map((contact) => ( 
              <ContactCard key={contact.id} contact={contact}/>
           )
            )
          }

        </div>
      </div>
          <AddAndUpdateContact isOpen={isOpen} onClose={onClose}/>
    </>
  );
}

export default App
