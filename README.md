# Time-Sheet Management System India - FastAPI

This project provides a comprehensive API monitoring tool to efficiently manage employee time sheets within an organization. It allows employees to log their working hours and work details, which can be accessed by administrators using employee IDs. The project is built using Python and FastAPI, with MongoDB used as the database for secure data storage.

## Project Overview

The Time-Sheet Management System is designed to streamline the tracking and management of employee time sheets. It offers an API-based solution where employees can log their working hours and the tasks they've completed. Administrators can access this data by querying the API with the respective employee ID. The project utilizes FastAPI for building the robust and scalable back-end, Python for scripting, and MongoDB for secure data storage and retrieval.

## Features

- **Employee Time-Logging:** Employees can log their working hours and details of tasks completed.
- **Admin Access:** Administrators can retrieve employee time-sheet data by querying the API using employee IDs.
- **Real-time Monitoring:** The system constantly monitors excel data for updates, ensuring accuracy and timeliness of the time-sheet records.
- **Insightful Reports:** The collected data can be used to generate insightful reports for managerial decision-making.
- **Secure Data Storage:** MongoDB is employed as the database for storing processed time-sheet data securely.

## Getting Started

To run the Time-Sheet Management System API, follow these steps:

1. Ensure you have Python and the required dependencies installed.
2. Clone this repository: 'https://github.com/IshikaNimade/_time_sheet_management_services_'
3. Navigate to the project directory
4. Install dependencies
5. Configure your MongoDB database connection in `config.py`.
6. Run the FastAPI server


## API Endpoints

- **POST /employee/time-sheet:** Log employee time-sheet details.
- **GET /admin/time-sheet/{employee_id}:** Retrieve time-sheet data for a specific employee.

## Dependencies

The project relies on the following technologies:

- FastAPI: A modern, fast, web framework for building APIs with Python.
- MongoDB: A NoSQL database for secure data storage.
- Other Python libraries (see `requirements.txt` for details).

## Usage

1. Employees can log their time-sheet data using the provided API endpoint.
2. Admins can retrieve employee time-sheet data by querying the API with the relevant employee ID.

## Contributions

Contributions to the project are welcome! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature/bugfix.
3. Implement your changes.
4. Open a pull request detailing your changes.


## Contact

For any inquiries or support, please contact [ishikanimade56@gmail.com](mailto:ishikanimade56@gmail.com).

Feel free to customize the sections and content as per your specific application requirements and reach out to us with any questions, feedback, or suggestions you may have.


---

Thank you for using the Time-Sheet Management System API! We believe this API will greatly enhance your organization's time-sheet tracking and management. Your feedback and contributions are highly valued and appreciated.
