const getState = ({ getStore, getActions, setStore }) => {
	const BACKEND_URL = "https://playground.4geeks.com/contact";
  
	return {
	  store: {
		contacts: [],
		contactList: [],
	  },
  
	  actions: {
		getContactList: async () => {
		  const PATH = "/agendas/fmatovelle/contacts";
		  try {
			const response = await fetch(`${BACKEND_URL}${PATH}`);
			if (!response.ok) throw new Error("Failed to fetch contact list");
			const data = await response.json();
			setStore({ contactList: data.contacts });
		  } catch (error) {
			console.error("Failed to fetch contacts list:", error);
		  }
		},
		createAgenda: () => {
			fetch('https://playground.4geeks.com/contact/agendas/fmatovelle', {
				method: 'POST',
				headers: { 
					'Content-Type': 'application/json' 
				},
				body: JSON.stringify({
					agenda_name: 'fmatovelle'
				})
			})
			.then(response => response.json())
			.then(data => {
				if (data.detail) {
					console.error("Error creating agenda: ", data.detail);
				} else {
					console.log("Agenda created successfully: ", data);
					// Load contacts if the agenda was created successfully
					getActions().loadContacts();
				}
			})
			.catch(error => {
				console.error("Error:", error);
			});
		},
		
		createNewContact: async (contact) => {
		  const PATH = "/agendas/fmatovelle/contacts";
		  try {
			const response = await fetch(`${BACKEND_URL}${PATH}`, {
			  method: "POST",
			  headers: {
				"Content-Type": "application/json",
			  },
			  body: JSON.stringify(contact),
			});
  
			if (!response.ok) throw new Error("Failed to create new contact");
			const data = await response.json();
  
			await getActions().getContactList();
		  } catch (error) {
			console.error("Failed to create new contact:", error);
		  }
		},
  
		updateContact: async (contact) => {
		  const PATH = `https://playground.4geeks.com/contact/agendas/fmatovelle/contacts/${contact.id}`;
		  try {
			const response = await fetch(`${BACKEND_URL}${PATH}`, {
			  method: "PUT",
			  headers: {
				"Content-Type": "application/json",
			  },
			  body: JSON.stringify(contact),
			});
  
			if (!response.ok) throw new Error("Failed to update contact");
			const data = await response.json();
  
			await getActions().getContactList();
		  } catch (error) {
			console.error("Failed to update contact:", error);
		  }
		},
  
		deleteContact: async (contactId) => {
		  const PATH = `https://playground.4geeks.com/contact/agendas/fmatovelle/contacts/${contactId}`;
		  try {
			const response = await fetch(`${BACKEND_URL}${PATH}`, {
			  method: "DELETE",
			});
  
			if (!response.ok) throw new Error("Failed to delete contact");
  
			await getActions().getContactList();
		  } catch (error) {
			console.error("Failed to delete contact:", error);
		  }
		},
	  },
	};
  };
  
  export default getState;


