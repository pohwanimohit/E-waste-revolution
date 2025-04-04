    <?php
        // Retrieve form data
        $Name = $_POST['name']; 
        $Email = $_POST['email']; 
        $MobileNumber = $_POST['phone'];
        $Category = $_POST['category'];
        $Location = $_POST['location'];
        $EwasteType = $_POST['ewaste-type'];
        $Remarks = $_POST['remarks']; 

        // Database connection
        $conn = new mysqli('localhost', 'root', '', 'Mohit');

        // Check connection
        if ($conn->connect_error) {
            die('Connection Failed: ' . $conn->connect_error);
        } else {
            // Prepare SQL statement
            $stmt = $conn->prepare("INSERT INTO pickup (Name, Email, MobileNumber, Category, Location, EwasteType, Remarks) VALUES (?, ?, ?, ?, ?, ?, ?)");

            // Bind parameters (all are strings)
            $stmt->bind_param("sssssss", $Name, $Email, $MobileNumber, $Category, $Location, $EwasteType, $Remarks);

            // Execute the query
            if ($stmt->execute()) {
                echo "Registration Successful!";
            } else {
                echo "Error: " . $stmt->error;
            }

            // Close statement and connection
            $stmt->close();
            $conn->close();
        }
    ?>