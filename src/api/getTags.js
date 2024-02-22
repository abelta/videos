const getTags = () => fetch('/tags').then(res => res.json())

export default getTags
