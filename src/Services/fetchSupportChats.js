import axios from 'axios'

export async function fetchSupportChats() {
    try {
        const { data } = await axios.get('https://my-json-server.typicode.com/codebuds-fk/chat/chats')
        return data
    } catch (error) {
        return error;
    }
}