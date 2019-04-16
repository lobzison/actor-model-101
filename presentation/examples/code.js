export default
`const scouter = () => {
    const levels = [9000, 9001, 9002];
    return levels
        .map(level => level - 1)
        .filter(level > 9000)
        .forEach(() => console.log('Over 9000!'));
}`;
