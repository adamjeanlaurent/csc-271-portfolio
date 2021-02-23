import Sock from "./Sock";

export default function getSocks(id = false) {
    const socks = [
        new Sock(
            'christmas',
            'Christmas Sock',
            'images/christmas-sock',
            'lorem ipsum',
            '$12.00',
            ['cotton' , 'wool']
        ),
        new Sock(
            'greenbee',
            'Green Bee Sock',
            'images/green-bee-sock',
            'lorem ipsum',
            '$12.00',
            ['cotton' , 'wool']
        ),
        new Sock(
            'spongebob',
            'Spongebob Sock',
            'images/spongebob-sock',
            'lorem ipsum',
            '$12.00',
            ['cotton' , 'wool']
        ),
        new Sock(
            'orange',
            'Spotted Orange/Black Sock',
            'images/spotted-orange-black-sock',
            'lorem ipsum',
            '$12.00',
            ['cotton' , 'wool']
        ),
        new Sock(
            'red',
            'Spotted Red/Black Sock',
            'images/spotted-red-black-sock',
            'lorem ipsum',
            '$12.00',
            ['cotton' , 'wool']
        ),
        new Sock(
            'yellow',
            'Spotted Yellow/Black Sock',
            'images/spotted-yellow-black-sock',
            'lorem ipsum',
            '$12.00',
            ['cotton' , 'wool']
        ),
    ];
    
    if(!id) {
        return socks;
    }
    else {
        const sock = socks.find(singleSock => singleSock.id === id);
        return sock;
    }
}