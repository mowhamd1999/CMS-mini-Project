let chartData = [
    {
        name: 'jan', sale: '7000'
    },
    {
        name: 'Feb', sale: '10000'
    },
    {
        name: 'March', sale: '1245'
    },
    {
        name: 'April', sale: '7500'
    },
    {
        name: 'May', sale: '15233'
    },
    {
        name: 'Jun', sale: '6800'
    },
    {
        name: 'July', sale: '6800'
    },
    {
        name: 'Agu', sale: '25325'
    },
    {
        name: 'Sep', sale: '8453'
    },
    {
        name: 'Oct', sale: '5135'
    },
    {
        name: 'Nov', sale: '1500'
    },
    {
        name: 'Dev', sale: '3233'
    }
]
let newMembers = [
    {
        id: 1,
        username: 'Mohammad Sadeghiani',
        title: 'Developer',
        img: '/1.jpeg'
    },
    {
        id: 2,
        username: 'Sadegh Fakhimi',
        title: 'Lowyer',
        img: '/1.jpeg'
    },
    {
        id: 3,
        username: 'Ali Moradkhani',
        title: 'Developer',
        img: '/1.jpeg'
    },
    {
        id: 4,
        username: 'Reza Bokani ',
        title: 'Developer',
        img: '/1.jpeg'
    },
]
let transactions = [
    {
        id: 1,
        name: 'Mohamamd Sadeghiani',
        date: '10 july 2023',
        amount: 580,
        status: 'Declined',
        img: '/1.jpeg'
    },
    {
        id: 2,
        name: 'Sadegh fakhimi',
        date: '16 Dec 2023',
        amount: 1704,
        status: 'Approved',
        img: '/1.jpeg'
    },
    {
        id: 3,
        name: 'Ali Moradkhani',
        date: '6 Jun 2024',
        amount: 9000,
        status: 'Pending',
        img: '/1.jpeg'
    },
    {
        id: 4,
        name: 'Reza Bokani',
        date: '10 july 2023',
        amount: 6000,
        status: 'Approved',
        img: '/1.jpeg'
    }
]
let userRow = [
    {
        id: 1,
        username: 'Mohammad Sadeghiani',
        email: 'mohammaderfansadeghiani@gmail.com',
        number: "09919751658",
        img: '/1.jpeg',
        status: 'active',
        transaction: '$10,000'

    },
    {
        id: 2,
        username: 'Reza Bokani',
        email: 'rezabokani@gmail.com',
        number: "09919751658",
        img: '/1.jpeg',
        status: 'active',
        transaction: '$11,000'

    },
    {
        id: 3,
        username: 'sadegh fakhimi',
        email: 'sadeghfakhimi@gmail.com',
        number: "09919751658",
        img: '/1.jpeg',
        status: 'active',
        transaction: '$12,000'

    },
    {
        id: 4,
        username: 'Mohammadali Moradkhani',
        email: 'alimoradkhani@gmail.com',
        number: "09919751658",
        img: '/1.jpeg',
        status: 'active',
        transaction: '$13,000'

    },
]
let product = [
    {
        id: 1,
        name: 'Apple',
        title: 'Apple Pro m3 2023 mtng',
        price: '$1999',
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, consectetur! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti, consectetur!",
        img: '/apple.webp'
    },
    {
        id: 2,
        name: 'Dell',
        title: 'Dell 124123',
        price: '$1000',
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, consectetur! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti, consectetur!",
        img: '/dell.avif'
    },
    {
        id: 3,
        name: 'Levovo',
        title: 'Lenovo legion 7',
        price: '$1999',
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, consectetur! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti, consectetur!",
        img: '/lenovo.avif'
    },
]
const productsData = [
    {
        name: 'jan',
        sale: 5000
    },
    {
        name: 'Feb',
        sale: 7000
    },
    {
        name: 'March',
        sale: 10000
    },
]
export default chartData ;
export { newMembers, transactions, userRow, product, productsData }
