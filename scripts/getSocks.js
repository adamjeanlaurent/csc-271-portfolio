import Sock from "./Sock";

export default function getSocks() {
    const socks = [
        new Sock(
            'Christmas Sock',
            'images/christmas-sock',
            'lorem ipsum',
            '$12.00',
            ['cotton' , 'wool']
        ),
        new Sock(
            'Green Bee Sock',
            'images/green-bee-sock',
            'lorem ipsum',
            '$12.00',
            ['cotton' , 'wool']
        ),
        new Sock(
            'Spongebob Sock',
            'images/spongebob-sock',
            'lorem ipsum',
            '$12.00',
            ['cotton' , 'wool']
        ),
        new Sock(
            'Spotted Orange/Black Sock',
            'images/spotted-orange-black-sock',
            'lorem ipsum',
            '$12.00',
            ['cotton' , 'wool']
        ),
        new Sock(
            'Spotted Red/Black Sock',
            'images/spotted-red-black-sock',
            'lorem ipsum',
            '$12.00',
            ['cotton' , 'wool']
        ),
        new Sock(
            'Spotted Yellow/Black Sock',
            'images/spotted-yeloow-black-sock',
            'lorem ipsum',
            '$12.00',
            ['cotton' , 'wool']
        ),
    ];
    return socks;
}