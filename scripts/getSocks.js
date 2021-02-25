import Sock from "./Sock.js";

export default function getSocks(id = false) {
    const socks = [
        new Sock(
            'christmas',
            'Christmas Sock',
            '../images/christmas-sock.jpg',
            'Christmas sock to keep you warm during the holidays.',
            '$11.00',
            ['cotton' , 'wool']
        ),
        new Sock(
            'greenbee',
            'Green Bee Sock',
            '../images/green-bee-sock.jpg',
            'Save the bees with this stylish bee sock!',
            '$18.00',
            ['cotton' , 'wool']
        ),
        new Sock(
            'spongebob',
            'Spongebob Sock',
            '../images/spongebob-sock.jpg',
            'Pass your boating test in these Spongebob socks.',
            '$12.00',
            ['cotton' , 'wool']
        ),
        new Sock(
            'orange',
            'Spotted Orange/Black Sock',
            '../images/spotted-orange-black-sock.jpg',
            'Black sock with orange accents.',
            '$15.00',
            ['cotton' , 'wool']
        ),
        new Sock(
            'red',
            'Spotted Red/Black Sock',
            '../images/spotted-red-black-sock.jpg',
            'Black sock with red accents.',
            '$11.00',
            ['cotton' , 'wool']
        ),
        new Sock(
            'yellow',
            'Spotted Yellow/Black Sock',
            '../images/spotted-yellow-black-sock.jpg',
            'Black sock with yellow accents.',
            '$10.00',
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