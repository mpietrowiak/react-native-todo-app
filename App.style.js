import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  app: {
    flex: 1,
    backgroundColor: "#F9F9F9",
    padding: 15,
  },
  header: { flex: 1 },
  body: { flex: 5, gap: 10 },
  footer: { height: 70 },
  scrollView: { gap: 20 },
  cardItem: {
    marginTop: 10,
  },
});
