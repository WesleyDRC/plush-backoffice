import Container from "./layout/Container";
import AppRoutes from "./routes/AppRoutes";
import { AuthProvider } from "./contexts/auth";
import { UserProvider } from "./contexts/user";
import { MenuProvider } from "./contexts/menu";
import { ProductsProvider } from "./contexts/products";

function App() {
  return (
		<AuthProvider>
			<UserProvider>
        <Container>
        <MenuProvider>
          <ProductsProvider>

            <AppRoutes />
            
          </ProductsProvider>
        </MenuProvider>
        </Container>
      </UserProvider>
    </AuthProvider>
  );
}

export default App;
