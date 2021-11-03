export class NumberUtils {
  public static roundToTwoDecimalPlaces(number: number): number {
    return Math.round((number + Number.EPSILON) * 100) / 100
  }
}
