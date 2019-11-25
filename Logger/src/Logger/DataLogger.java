/*
 */
package Logger;
import com.mongodb.*;
import java.net.UnknownHostException;
import java.sql.Timestamp;
import java.util.Date;
import java.util.Random;
import java.util.Timer;
import java.util.TimerTask;
import java.util.logging.Level;
import java.util.logging.Logger;
/**
 *
 * @author daeperdomocr
 */
public class DataLogger extends TimerTask {
    
    public static DB db;
    public static DBCollection table;
        
    @Override
    public void run() {
        System.out.println("Insertion started at:"+new Date());
        insertToDB();
    }

    private void insertToDB(){        
            Date date = new Date();
            Timestamp timestmp = new Timestamp(date.getTime());              
            Random r = new Random();
            int random = r.nextInt(1000);
            System.out.println("time: "+timestmp+", random: "+Integer.toString(random));            
            DBObject log = new BasicDBObject()
                .append("timestamp",timestmp)
                .append("random",random);
            table.insert(log);
    }
    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {       
        //MongoDB connection
        try {
            Mongo mongo = new Mongo("LocalHost",27017);          
            db=mongo.getDB("database"); 
            table=db.getCollection("table");
        } catch (UnknownHostException ex) {
            Logger.getLogger(DataLogger.class.getName()).log(Level.SEVERE, null, ex);
        }       
        TimerTask timerTask = new DataLogger();
        //running timer task as daemon thread
        Timer timer = new Timer(true);
        timer.scheduleAtFixedRate(timerTask, 0, 60*1000);
        System.out.println("Logger started");
        //cancel after sometime
        try {
            Thread.sleep(1000000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        timer.cancel();
    }    
}















