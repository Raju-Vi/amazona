import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import Layout from "../components/Layout";
import data from "../utils/data";
import NextLink from "next/link";

const Home = () => {
  return (
    <div>
      <Layout>
        <div>
          <h1>Products</h1>
          <Grid container spacing={3}>
            {data.products.map((product) => (
              <Grid item md={4} key={product.name}>
                <Card>
                  <CardActionArea>
                    <NextLink href={`/product/${product.slug}`}>
                      <CardMedia
                        component="img"
                        title={product.name}
                        image={product.image}
                      />
                    </NextLink>
                    <CardContent>
                      <Typography>{product.name}</Typography>
                    </CardContent>
                  </CardActionArea>

                  <CardActions>
                    <Typography fontWeight="bold">
                      ${product.price}/-
                    </Typography>
                    <Button size="small" color="primary">
                      Add to Cart
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      </Layout>
    </div>
  );
};

export default Home;
