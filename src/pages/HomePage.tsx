import { useContext } from "react";
import {
  Container,
  Desk,
  DeskMobile,
  Paper,
  DatePicker,
  Chart,
  Backdrop,
} from "../components";
import { useMediaQuery } from "../hooks";
import { backend, withAuth } from "../libs";
import { DateContext } from "../context";

const Home = ({ desks, bookings }: any) => {
  const isDesktop = useMediaQuery("(min-width: 814px)");
  const { date } = useContext(DateContext);

  if (!desks) {
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

export const HomePage = withAuth(Home) as any;

// export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
//   const token: any = getCookie("jwt", { req, res });

//   try {
//     const { data: desks } = await backend.get("/desks", {
//       headers: { Authorization: token }, // Must be set in header due to how SSR works or useSWR can be used instead
//     });

//     const { data: bookings } = await backend.get("/bookings", {
//       headers: { Authorization: token }, // Must be set in header due to how SSR works or useSWR can be used instead
//     });

//     return { props: { desks, bookings } };
//   } catch (error) {
//     return { props: {} };
//   }
// };
