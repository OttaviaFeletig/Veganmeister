import { PostN } from "../@types"

export const deletePostSection = (post: PostN.PostI, section: PostN.PostSectionI) => {
    const { postSections } = post
    let index: number
    if (postSections) index = postSections.findIndex(e => e.index === section.index)
    else {
        index = -1
        console.log('index :', index);
    }
    //     switch (action) {
    //         case 'edit': if (index !== -1) {
    //             postSections.slice(0, index)
    //             postSections[index] = section
    //             postSections.slice(index + 1)
    //         }
    //         else {
    //             const lastIndex = postSections.length + 1
    //             const updateArticle = { ...section, index: lastIndex }
    //             postSections.push(updateArticle)
    //         }
    //             break
    //         case 'delete':
    postSections.splice(index, 1)
    //             break
    //     }

    reIndexSections(postSections)
}
export const sectionsTextEdit = (post: PostN.PostI, section: PostN.PostSectionI, value: string, header: boolean) => {
    const { postSections } = post
    const postSection = postSections.find(e => e === section);
    if (postSection && header) postSection.header = value
    if (postSection && !header) postSection.body = value
}
export const sectionsReOrder = (post: PostN.PostI, section: PostN.PostSectionI, action: string) => {
    const { postSections } = post
    console.log('section :', section);
    let index = postSections.findIndex(e => e.index === section.index);
    switch (action) {
        case 'moveUp': if (index !== 0) {
            postSections.splice(index - 1, 2, postSections[index], postSections[index - 1]);
        }
            break
        case 'moveDown':
            if (index !== postSections.length - 1) {
                postSections.splice(index, 2, postSections[index + 1], postSections[index]);
            }
            break
    }


    return reIndexSections(postSections)
}

const reIndexSections = (postSections: PostN.PostSectionsT) => {
    postSections.forEach((e, i) => {
        postSections.slice(0, i)
        postSections[i] = {
            ...e,
            index: i
        }
        postSections.slice(i + 1)
    })
    return postSections
}