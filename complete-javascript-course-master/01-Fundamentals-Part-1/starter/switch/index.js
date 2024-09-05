//SWTICH STATEMENT 
const day = 'monday'

switch (day) {
    case 'monday':
        console.log('Today is monday')
        break
    case 'tuesday':
        console.log('Today is tuesday')
        break
    case 'wednesday':
    case 'thursday':
        console.log('Today you study')
        break
    case 'friday':
        console.log('Today is friday')
        break
    case 'saturday':
        console.log('Today is saturday')
        break
    case 'sunday':
        console.log('Today is sunday')
        break
    default:
        console.log('Not valid day')
}