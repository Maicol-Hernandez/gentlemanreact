// Objectivo: se utiliza para memorizar una instancia de una función
// tip: hace que un hijo no renderice

import { memo, useCallback, useState } from "react";

// Ejemplo:
// supongamos que tenés un número de telefono al que llamas con frecuencia.
// En vez de marcarlo continuamente lo vamos a almacenar en los contactos del telefono
// A menos el numero cambie siempre utilizo el mismo contacto

interface Contact {
    id: number;
    name: string;
    phone: string
}

interface ContactProps {
    contact: Contact;
    onCall: (phone: string) => void;
}


const ContactCard = memo(({ contact, onCall }: ContactProps) => {
    console.log(`Renderizando contacto ${contact.name}`);

    return (
        <div>
            <h3>{contact.name}</h3>
            <p>Telefono: {contact.phone}</p>
            <button onClick={() => onCall(contact.name)}>Call</button>
        </div>
    )
})

export const PhoneBook = () => {
    const [contacts, setContacts] = useState<Contact[]>([
        {
            id: 1,
            name: 'Manzana',
            phone: '123-456-7890'
        },
        {
            id: 2,
            name: 'Pera',
            phone: '987-654-3210'
        },
        {
            id: 3,
            name: 'Leche',
            phone: '555-555-5555'
        }
    ]);

    const [log, setLog] = useState<string>('');

    const makeCall = useCallback((name: string) => setLog(`Llamando al ${name}`), []);

    const addContact = () => {
        const newContact = {
            id: contacts.length + 1,
            name: `Contact ${contacts.length + 1}`,
            phone: `${Math.floor(1000000000 + Math.random() * 900000000)}`
        }

        setContacts([...contacts, newContact]);
    }

    return (
        <div>
            <h2>Phone Book</h2>
            {contacts.map((contact) => (
                <ContactCard key={contact.id} contact={contact} onCall={makeCall}></ContactCard>
            ))}
            <button onClick={addContact}>Add Contact</button>
            <p>{log}</p>
        </div>
    )
}