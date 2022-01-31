let a = '#access_token=BQCC23zVUifFkdO_oE_nftsEJfKgnJn2qmCGVVoigKSwx1yjigQccOzaVxVlmpkyE0Lf16r1rkpUv3ZVUnFONyDVJx1AxWF5W5PKvTR_1imFSe8X_5t597nAIgVFXZthy7UAqrgKA-v2hnfPxfl_YXdaG0PdCEYXVkuG42i-WzNY-8IL&token_type=Bearer&expires_in=3600'
let b = a.substring(1).split('&').reduce((initial, item) => {
    let parts = item.split('=');
    initial[parts[0]] = decodeURIComponent(parts[1])
    return initial
}, {})

console.log('a => ', a, '\nb => ', b)