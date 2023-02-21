import Container from "./layout/Container";
import AppRoutes from "./routes/AppRoutes";
import { AuthProvider } from "./contexts/auth";
import { UserProvider } from "./contexts/user";
import { MenuProvider } from "./contexts/menu";

function App() {
  return (
		<AuthProvider>
			<UserProvider>
        <Container>
        <MenuProvider>
          <AppRoutes />
        </MenuProvider>
        </Container>
      </UserProvider>
    </AuthProvider>
  );
}

export default App;
