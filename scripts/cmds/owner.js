module.exports = {
    config: {
        name: "owner",
        role: 0,
        author: "Micazhla",
        aliases: ["own", "master"],
        longDescription: "See owner name and link"
    },
    onStart: async function ({ message, api, event }) {
        const msg = "✨We are Math Major from Rizal Technological University✨\nCOLLEGE OF EDUCATION\n———————————————————\nDaryl A. Abarracoso\nGiebe Brentrich D. Armohila\nNathaniel V. Robles\nAngelo L. Mallano\nCED-06";
        
        message.reply(msg);
    }
};
