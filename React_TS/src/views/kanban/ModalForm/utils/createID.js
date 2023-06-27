const createID = () => ('' + (Math.random() * Math.random() * 10000).toFixed()).slice(1, 5);

export default createID;