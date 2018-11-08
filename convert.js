const pixels = `51px 38px,54px 33px,58px 33px,71px 32px,133px 29px,242px 25px,354px 22px,467px 20px,589px 18px,694px 18px,795px 17px,925px 22px,934px 22px,937px 29px,938px 38px,939px 77px,941px 130px,942px 183px,941px 242px,939px 334px,935px 417px,932px 475px,926px 550px,918px 635px,917px 645px,912px 649px,904px 653px,873px 655px,812px 659px,734px 664px,653px 668px,560px 669px,484px 669px,388px 665px,282px 661px,179px 652px,86px 642px,69px 641px,65px 636px,64px 632px,59px 579px,52px 489px,48px 417px,46px 300px,45px 208px,47px 151px,47px 83px,49px 46px`

const width = 974 
const height = 698

const split  = pixels.split(",")
const mapped = split.map(pixelPoint => {
    const [x, y] = pixelPoint.split(" ")
    const xVal = parseInt(x)
    const yVal = parseInt(y)
    const xPercent = xVal / width * 100
    const yPercent = yVal / height * 100
    return `${xPercent}% ${yPercent}%`
}).join(",")

console.log(mapped)