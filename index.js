var og = require('open-graph')

module.exports = (username) => new Promise((resolve, reject) => {
    og(
        'https://t.me/' + username,
        (err, res) => {
            if (err) reject(err)
            else resolve({
                name: res.title,
                bio: res.description,
                image: res.image.url
            })
        }
    )
})
