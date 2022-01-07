const{ gql} = require("apollo-server");

const typeDefs = gql`

type User {
    id: Int!
    email: String!
    name: String
} 
type Post  {
    id: Int
    title: String
    body: String
    image: String
    likes: Int
    Unlikes: Int
    create_date: String
    author_id: Int
    author_email: String
    author_name: String

}
 type PostResponse {
     status: Int
     message: String!
 }

 type LinkedInResponse {
     status: Int
     message: String!
     likes_count: Int!
     unlikes_count: int!

 }
 input CreatePostContent {
     title: String!
     boby: String!
     image: String
     author_id: Int!
     create_date: String!

 }
 
 input UpdatePostContent {
     id: Int!
     title: String!
     body: String!
     image: String!
     author_id: int!

 }
 input DeletePostContent {
     id: Int!

 }

 input DeletePostContent {
     id: Int!

 }

 input LikedandUnlinkedPostContent {
     id: Int!

 }

 type Comment {
     id: Int!
     body: String!
     user_id: Int!
     post_id: Int!
     create_date: String!

 }

 input CreateCommmentContent {
     body: String!
     user_id: Int!
     post_id: Int!
     create_date: String!

 }
 input DeleteCommentContent {
     id: Int!

 }
 type CommentReply {
     id: Int!
     body: String!
     user_id: Int!
     comment_id: Int!
     create_date: String!
 }
 input CommentReplyContent {
     body: String!
     user_id: Int!
     comment_id: Int!
     create_date: String!

 }   

 type Query {
     getPost(title: String!): Post

 }

 type Mutation {
     createPost(content: CreatePostContent!): PostResponse!
     updatePost(Content: UpdatePostContent!): PostPesponse!
     deletePost(content: DeletePostContent!): PostResponse!
     likePost(content: LikeAndUnLikePostContent!): LikeAndUnlikeResponse!
     unlikePost(content: LikeAndUnlikePostContent!): LikeAndUnlikeResponse!
     createComment(content: CreateCommentContent!): PostResponse!
     deleteComment(content: DeleteCommentContent!): PostResponse!
     replyComment(content: CommentReplyContent!): PostResponse!
 }


 }

`;
module.export = typeDefs;


