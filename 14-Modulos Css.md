# Modulos Css

Los modulos Css sirven para evitar que las clases de diferentes
componentes se sobre-escriban cuando tienen el mismo nombre

Cuando se utiliza react-create-app los modulos css ya viene configurado
por defecto

1. El archivo debe nombrarse "(nombre).module.css

2. Implementacion

```jsx
import styles from './TarjetaFruta.module.css';

 render () {    

    return (
      <div className={ styles.nameClass }>
      <div className={ styles['name-class'] }>
```