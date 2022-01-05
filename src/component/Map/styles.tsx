import { Dimensions, StyleSheet } from 'react-native';

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  text: {
    fontSize: 10,
    color: '#968E8E',
    paddingHorizontal: 20,
  },
  map: {
    width: Dimensions.get("window").width - 20,
    height: Dimensions.get("window").height - 102,
    marginTop: 20,
    alignSelf: 'center'
  },
  calloutContainer: {
    width: 160,
    height: "100%",
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 16,
    justifyContent: "center",
  },

  calloutText: {
    color: "#0089a5",
    textDecorationLine: "underline",
    fontSize: 14,
  },

  calloutSmallText: {
    color: "#005555",
    fontSize: 10,
  },

  footer: {
    position: "absolute",
    left: 24,
    right: 24,
    bottom: 32,
    backgroundColor: "#fff",
    borderRadius: 20,
    height: 56,
    paddingLeft: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    elevation: 3,
  },

  footerText: {
    width: 200,
    color: "#8fa7b3",
  },

  searchUserButton: {
    width: 56,
    height: 56,
    backgroundColor: "#0089a5",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  btnLinha: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    marginVertical: 10,
  },
  btn: {
    backgroundColor: "#27A3DC",
    borderRadius: 20,
    height: 50,
    width: 80,
  },
  textBtn: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
    fontStyle: 'italic',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  btnLinhaMarcador: {
    position: "absolute",
    flexDirection: 'column',
    alignSelf: 'flex-end',
    width: "13%",
    zIndex: 99,
    top: '75%',
    right: 8
  },
  btnMarcador: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#D999B6",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 10,
    height: 50,
    paddingLeft: 2,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginVertical: 10,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default estilo;





