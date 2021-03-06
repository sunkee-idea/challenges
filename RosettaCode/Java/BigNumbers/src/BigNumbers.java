import java.math.BigInteger;

/**
 * Inspired by Rosetta code.org
 * http://rosettacode.org/wiki/Long_multiplication
 */
public class BigNumbers {
    public static void main(String[] args) {
        if (args.length != 2) {
            System.out.println("Two integers required.");
            System.exit(1);
        }

        System.out.println(new BigInteger(args[0]).multiply(new BigInteger(args[1])));
    }
}
