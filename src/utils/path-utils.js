export const getPath = (route) => {
    if (process.env.NODE_ENV === 'development') {
        return `/React-TS${route ? `/${route}` : ''}/`
    } else {
        return `/React-TS${route ? `/${route}` : ''}/`
    }
}