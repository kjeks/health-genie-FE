export function getUrlByListName (listName) {
    switch(listName) {
        case 'MEAL':
            return 'meals';
        case 'ACTIVITY':
            return 'activities';
        case 'INGREDIENT':
            return 'ingredients';
        case 'WEEK':
            return 'days';
        default:
            return ''
    }
}