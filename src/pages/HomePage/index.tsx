import { useContext, FC } from "react";
import { useQuery } from "react-query";
import {
  Container,
  Desk,
  DeskMobile,
  Paper,
  DatePicker,
  Chart,
  Backdrop,
} from "../../components";
import { useMediaQuery } from "../../hooks";
import { fetchBookings, fetchDesks } from "./libs";
import { withAuth } from "../../libs";
import { DateContext } from "../../context";

const Home: FC = () => {
  const isDesktop = useMediaQuery("(min-width: 814px)");
  const { date } = useContext(DateContext);
  const { data: desks, isError } = useQuery("desks", fetchDesks);
  const { data: bookings } = useQuery("bookings", fetchBookings);

  if (isError) {
    return <div>Oops! Could not fetch data</div>;
  }

  if (!desks || !bookings) {
    return <Backdrop />;
  }

  return (
    <Container>
      {/* GRID */}
      <main className="grid grid-cols-[1fr] sm:grid-cols-[260px_1fr] mt-6 h-[calc(100vh-70px)] ">
        {/* GRID ITEM DESKS*/}

        <section className="max-h-[calc(100vh-60px)] ">
          {isDesktop && (
            <Paper>
              <p className="text-[18px]">
                Pick a date and hover over a desk to book it, or see who has
                booked it.
              </p>
            </Paper>
          )}

          {/* Date picker on mobile */}
          {!isDesktop && (
            <div className="mb-2">
              <DatePicker />
            </div>
          )}

          {/* Render desks */}
          {desks.map((desk: any) => {
            //filter booking by current date
            const filteredBookings = bookings.filter(
              (booking: any) => booking.date === date
            );

            return isDesktop ? (
              <Desk
                key={desk._id}
                id={desk._id}
                name={desk.name}
                filteredBookings={filteredBookings}
              />
            ) : (
              <DeskMobile
                key={desk._id}
                name={desk.name}
                id={desk._id}
                filteredBookings={filteredBookings}
              />
            );
          })}
        </section>

        {/* GRID ITEM SCREEN - hidden on small devices */}
        <section className="ml-6 hidden sm:block">
          <DatePicker />
          <p className="mb-2 mt-6 text-[18px]">
            Average amount of people in the office
          </p>
          <Paper>
            <Chart />
          </Paper>
        </section>
      </main>
    </Container>
  );
};

export const HomePage = withAuth(Home) as FC;
