import  createSchema  from 'part:@sanity/base/schema-creator'
import  schemaTypes  from 'part:@sanity/base/schema-type'

import blockContent from './blockContent'
import category from './category'
import author from './author'
import restaurant from './restaurant'
export default createSchema({
    name:'default',
    types:schemaTypes.concat([
        restaurant,
        author, 
        category, 
        blockContent
    ])
})

