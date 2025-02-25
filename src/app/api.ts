export const getPosts = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return [
        { id: 1, title: 'Post 1' },
        { id: 2, title: 'Post 2' },
        { id: 3, title: 'Post 3' },
    ]
}

export const getComments = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return [
        { id: 1, text: 'Comment 1' },
        { id: 2, text: 'Comment 2' },
        { id: 3, text: 'Comment 3' },
    ]
}