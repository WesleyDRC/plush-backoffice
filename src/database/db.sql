-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema ecommerce
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema ecommerce
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `ecommerce` DEFAULT CHARACTER SET utf8 ;
USE `ecommerce` ;

-- -----------------------------------------------------
-- Table `ecommerce`.`USER`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ecommerce`.`USER` (
  `idUSER` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `username` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idUSER`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ecommerce`.`DISCOUNT_PRODUCT`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ecommerce`.`DISCOUNT_PRODUCT` (
  `id` INT NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  `desc` VARCHAR(255) NOT NULL,
  `discount` REAL NOT NULL,
  `active` TINYINT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ecommerce`.`PRODUCTS_INVENTORY`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ecommerce`.`PRODUCTS_INVENTORY` (
  `id` INT NOT NULL,
  `quantity` INT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ecommerce`.`CATEGORIES`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ecommerce`.`CATEGORIES` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ecommerce`.`PRODUCTS`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ecommerce`.`PRODUCTS` (
  `id` INT NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  `description` VARCHAR(255) NOT NULL,
  `cor` VARCHAR(45) NOT NULL,
  `price` REAL NOT NULL,
  `discount_id` INT NOT NULL,
  `inventory_id` INT NOT NULL,
  `cotegory_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_PRODUCTS_DISCOUNT_PRODUCT1_idx` (`discount_id` ASC) VISIBLE,
  INDEX `fk_PRODUCTS_PRODUCTS_INVENTORY1_idx` (`inventory_id` ASC) VISIBLE,
  INDEX `fk_PRODUCTS_CATEGORIES1_idx` (`cotegory_id` ASC) VISIBLE,
  CONSTRAINT `fk_PRODUCTS_DISCOUNT_PRODUCT1`
    FOREIGN KEY (`discount_id`)
    REFERENCES `ecommerce`.`DISCOUNT_PRODUCT` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_PRODUCTS_PRODUCTS_INVENTORY1`
    FOREIGN KEY (`inventory_id`)
    REFERENCES `ecommerce`.`PRODUCTS_INVENTORY` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_PRODUCTS_CATEGORIES1`
    FOREIGN KEY (`cotegory_id`)
    REFERENCES `ecommerce`.`CATEGORIES` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ecommerce`.`PAYMENT_DETAILS`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ecommerce`.`PAYMENT_DETAILS` (
  `id` INT NOT NULL,
  `order_id` INT NOT NULL,
  `amount` INT NOT NULL,
  `provider` VARCHAR(45) NOT NULL,
  `status` VARCHAR(45) NOT NULL,
  `created_at` TIMESTAMP NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ecommerce`.`ORDER_DETAILS`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ecommerce`.`ORDER_DETAILS` (
  `id` INT NOT NULL,
  `total` REAL NOT NULL,
  `created_at` TIMESTAMP NOT NULL,
  `payment_id` INT NOT NULL,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_ORDER_DETAILS_PAYMENT_DETAILS1_idx` (`payment_id` ASC) VISIBLE,
  INDEX `fk_ORDER_DETAILS_USER1_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_ORDER_DETAILS_PAYMENT_DETAILS1`
    FOREIGN KEY (`payment_id`)
    REFERENCES `ecommerce`.`PAYMENT_DETAILS` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_ORDER_DETAILS_USER1`
    FOREIGN KEY (`user_id`)
    REFERENCES `ecommerce`.`USER` (`idUSER`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ecommerce`.`ORDER_ITEMS`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ecommerce`.`ORDER_ITEMS` (
  `id` INT NOT NULL,
  `quantity` INT NOT NULL,
  `created_at` TIMESTAMP NOT NULL,
  `order_id` INT NOT NULL,
  `product_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_ORDER_ITEMS_ORDER_DETAILS1_idx` (`order_id` ASC) VISIBLE,
  INDEX `fk_ORDER_ITEMS_PRODUCTS1_idx` (`product_id` ASC) VISIBLE,
  CONSTRAINT `fk_ORDER_ITEMS_ORDER_DETAILS1`
    FOREIGN KEY (`order_id`)
    REFERENCES `ecommerce`.`ORDER_DETAILS` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_ORDER_ITEMS_PRODUCTS1`
    FOREIGN KEY (`product_id`)
    REFERENCES `ecommerce`.`PRODUCTS` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ecommerce`.`USER_ADDRESS`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ecommerce`.`USER_ADDRESS` (
  `id` INT NOT NULL,
  `city` VARCHAR(45) NOT NULL,
  `postal_code` VARCHAR(45) NOT NULL,
  `country` VARCHAR(45) NOT NULL,
  `telephone` VARCHAR(10) NULL,
  `mobile` VARCHAR(11) NULL,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_USER_ADDRESS_USER1_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_USER_ADDRESS_USER1`
    FOREIGN KEY (`user_id`)
    REFERENCES `ecommerce`.`USER` (`idUSER`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ecommerce`.`USER_PAYMENT`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ecommerce`.`USER_PAYMENT` (
  `id` INT NOT NULL,
  `payment_type` VARCHAR(45) NOT NULL,
  `expire` DATE NOT NULL,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_USER_PAYMENT_USER1_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_USER_PAYMENT_USER1`
    FOREIGN KEY (`user_id`)
    REFERENCES `ecommerce`.`USER` (`idUSER`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ecommerce`.`SHOPPING_SESSION`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ecommerce`.`SHOPPING_SESSION` (
  `id` INT NOT NULL,
  `total` REAL NOT NULL,
  `created_at` TIMESTAMP NOT NULL,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_SHOPPING_SESSION_USER_ADDRESS1_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_SHOPPING_SESSION_USER_ADDRESS1`
    FOREIGN KEY (`user_id`)
    REFERENCES `ecommerce`.`USER_ADDRESS` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ecommerce`.`CART_ITEMS`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ecommerce`.`CART_ITEMS` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `quantity` INT NOT NULL,
  `created_at` TIMESTAMP NOT NULL,
  `product_id` INT NOT NULL,
  `session_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_CART_ITEMS_PRODUCTS1_idx` (`product_id` ASC) VISIBLE,
  INDEX `fk_CART_ITEMS_SHOPPING_SESSION1_idx` (`session_id` ASC) VISIBLE,
  CONSTRAINT `fk_CART_ITEMS_PRODUCTS1`
    FOREIGN KEY (`product_id`)
    REFERENCES `ecommerce`.`PRODUCTS` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_CART_ITEMS_SHOPPING_SESSION1`
    FOREIGN KEY (`session_id`)
    REFERENCES `ecommerce`.`SHOPPING_SESSION` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
