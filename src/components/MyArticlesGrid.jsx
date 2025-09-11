import { useEffect, useState } from "react"
import useArticleStore from "../api/StoreApiArticles"
import storeLikeDislike from "../store/storeLikeDislike";
import { Link } from "react-router-dom"
import { Grid, Card, CardMedia, CardContent, Typography, Box } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

export default function MyArticleGrid() {
  const { articles, fetchPosts, error } = useArticleStore((state) => state)
  const { setPosts, posts, deletePostById } = storeLikeDislike((state) => state)

  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    const unsub = storeLikeDislike.persist.onFinishHydration(() => {
      setHydrated(true)
    })

    if (storeLikeDislike.persist.hasHydrated()) {
      setHydrated(true)
    }
    return () => unsub()
  }, [])

  useEffect(() => {
    if (!hydrated) return
  }, [hydrated])

  if (!hydrated) return <p className="text-black">loading...</p>

  const handleDelete = (id) => {
    deletePostById(id)
  }

  console.log(posts)
  return (<>
    <Box sx={{ p: 6, minHeight: "40vh" }}>
      <Typography variant="h4" fontWeight="bold" mb={4} color="black">
        My Articles
      </Typography>

      <Grid container spacing={4}>
        {posts.filter((post) => post.personal === false)?.map((post) => (
          <Grid key={post.id} xs={12} sm={4} lg={4} size={4}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                transition: "transform 0.2s, box-shadow 0.2s",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: 6,
                },
              }}
            >
              <CardContent>
                <Link to={`/article/${post.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={`https://picsum.photos/seed/${post.id}/300/200`}
                    alt={post.title}
                    sx={{ borderRadius: 2 }}
                  />
                  <Typography variant="h6" fontWeight="semibold" gutterBottom sx={{ "&:hover": { textDecoration: "underline" } }}>
                    {post.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      "&:hover": { textDecoration: "underline" },
                    }}
                  >
                    {post.body}
                  </Typography>
                </Link>
                <Typography color="black">{post.likes} Likes</Typography>
                <Typography color="black">{post.dislikes} Dislikes</Typography>
                <DeleteIcon onClick={() => handleDelete(post.id)} sx={{ ":hover": { color: "red", cursor: "pointer",}}} />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  </>)
}