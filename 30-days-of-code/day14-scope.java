import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;


class Difference {
  private int[] elements;
  public int maximumDifference;

	public Difference(int[] a)
    {
    this.elements = a;
}
public void computeDifference()
    {
    int min = elements[0];
    int max = elements[0];
    for(int i = 0; i < elements.length; i++)
        {
        if (elements[i] < min)
            {
            min = elements[i];
        }
        if (elements[i] > max)
            {
            max = elements[i];
        }                
    }
maximumDifference = Math.abs(max-min);    
}

} // End of Difference class