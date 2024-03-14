import { View, Image, Text, Button, ScrollView, StyleSheet } from "react-native";
import products from "../data/products";
import { useEffect, useLayoutEffect, useState } from "react";
import StarRating from "../Components/StarRating";
import { Ionicons } from "@expo/vector-icons";
import view_price from "../helper/view_price";
import ReviewProduct from "../Components/ReviewProduct";

function DetailProductScreen({ navigation, route }) {
    const { productId } = route.params;
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        setProduct(products.find(product => product.id == productId))
    }, [])

    return (
        <ScrollView contentContainerStyle={styles.detail}>
            {product &&
                <>
                    <Image source={product.image} style={styles.imageDetail} />
                    <View style={styles.mainDetail}>
                        <Text style={styles.nameProduct}>{product.name}</Text>
                        <View style={styles.ratingProduct}>
                            <StarRating rating={product.rating} sizeStar={14} />
                            <Text>Kho: {product.countInStock} | Đã bán: {product.sold}</Text>
                        </View>
                        <Text style={styles.priceProduct}>{view_price(product.price)}</Text>
                        <Text style={styles.descProduct}>{product.description.replace(/\s+/g, ' ')}</Text>
                        <View style={styles.quantityProduct}>
                            <Text>Số lượng</Text>
                            <View style={styles.changeQuantity}>
                                <Ionicons
                                    style={styles.icon}
                                    name="remove" size={18}
                                    onPress={() => setQuantity(prev => prev - 1)}
                                    disabled={quantity > 1 ? false : true}
                                />
                                <Text style={styles.contentQuantity}>{quantity}</Text>
                                <Ionicons
                                    style={styles.icon}
                                    name="add" size={18}
                                    onPress={() => setQuantity(prev => prev + 1)}
                                    disabled={quantity < product.countInStock ? false : true}
                                />
                            </View>
                        </View>
                        <Button
                            style={styles.addToCartBtn}
                            title="Thêm vào giỏ hàng"
                            color='green'
                        />
                    </View>
                    <ReviewProduct productId={product.id} rating={product.rating}/>
                </>
            }
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    detail: {

    },
    imageDetail: {
        width: '100%',
        height: 360,
        resizeMode: 'cover'
    },
    mainDetail: {
        padding: 10,
        gap: 5,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
    },
    nameProduct: {
        fontSize: 18,
        fontWeight: '600'
    },
    priceProduct: {
        color: 'red',
        fontSize: 20,
        fontWeight: '600'
    },
    ratingProduct: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    descProduct: {
        paddingRight: 2,
        textAlign: 'justify'
    },
    quantityProduct: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 10,
        marginBottom: 10,
        borderTopColor: '#ccc',
        borderTopWidth: 1,
    },
    changeQuantity: {
        flexDirection: 'row',
        marginRight: 20,
        alignItems: 'center',
        paddingVertical: 5,
        width: 100,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
    },
    icon: {
        flex: 1,
        textAlign: 'center',
    },
    contentQuantity: {
        flex: 2,
        textAlign: 'center',
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: '#ccc',
    },
})


export default DetailProductScreen